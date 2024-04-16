import {
  libraryGenerator as library,
  ngrxGenerator,
} from '@nx/angular/generators';
import {
  Tree,
  formatFiles,
  getProjects,
  installPackagesTask,
  joinPathFragments,
  normalizePath,
} from '@nx/devkit';
import { wrapAngularDevkitSchematic } from '@nx/devkit/ngcli-adapter';
import { SchematicOptions } from './schema';

export default async function (tree: Tree, schema: SchematicOptions) {
  const featureShell = `${schema.name}-feature-shell`;
  const dataAccess = `${schema.name}-data-access`;

  if (['all', 'feature'].includes(schema.type)) {
    /*
          parentModule: normalizePath(
        joinPathFragments(
          ...[
            getProjects(tree).get(schema.app)?.sourceRoot as string,
            'app',
            'app-routing.module.ts',
          ]
        )
      ),
    */
    await library(tree, {
      name: featureShell,
      directory: normalizePath(
        joinPathFragments(...[schema.directory, schema.name])
      ),
      importPath: `@${normalizePath(
        joinPathFragments(...[schema.directory, featureShell])
      )}`,
      lazy: schema.lazy,
      parent: normalizePath(
        joinPathFragments(
          ...[
            getProjects(tree).get(schema.app)?.sourceRoot as string,
            'app',
            'app-routing.module.ts',
          ]
        )
      ),
      prefix: schema.prefix,
      routing: schema.routing,
      simpleName: true,
      standaloneConfig: true,
      unitTestRunner: schema.unitTestRunner,
      tags: schema.tags,
      strict: schema.strict,
      skipFormat: true,
    });
  }

  if (['all', 'data-access'].includes(schema.type)) {
    await library(tree, {
      name: dataAccess,
      directory: normalizePath(
        joinPathFragments(...[schema.directory, schema.name])
      ),
      importPath: `@${normalizePath(
        joinPathFragments(...[schema.directory, dataAccess])
      )}`,
      prefix: schema.prefix,
      simpleName: true,
      standaloneConfig: true,
      unitTestRunner: schema.unitTestRunner,
      tags: 'scope:shared,type:data-access',
      strict: schema.strict,
      skipFormat: true,
    });

    await ngrxGenerator(tree, {
      name: schema.name,
      directory: `+state`,
      minimal: false,
      module: normalizePath(
        joinPathFragments(
          ...[
            getProjects(tree).get(
              `${schema.directory.replace(/[/]/g, '-')}-${schema.name}-${
                schema.name
              }-data-access`
            )?.sourceRoot as string,
            `lib`,
            `${schema.name}-data-access.module.ts`,
          ]
        )
      ),
      barrels: true,
      facade: true,
      skipFormat: true,
    });

    const service = wrapAngularDevkitSchematic(
      '@schematics/angular',
      'service'
    );

    await service(tree, {
      name: schema.name,
      project: `${schema.directory.replace(/[/]/g, '-')}-${schema.name}-${
        schema.name
      }-data-access`,
    });
  }

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
