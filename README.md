# revision-ten/cms-amp

[![Latest Version][badge-release]][release]
[![Software License][badge-license]][license]
[![Total Downloads][badge-downloads]][downloads]

## Installation

#### Install via composer

The preferred method of installation is via [Packagist][] and [Composer][]. Run the following command to install the package and add it as a requirement to your project's `composer.json`:

```bash
composer req revision-ten/cms-amp
```

#### Add the new bundles to the kernel

Add the bundle to your config/bundles.php **before the CmsBundle**.
```PHP
RevisionTen\CMS_AMP\CmsAmpBundle::class => ['all' => true],
RevisionTen\CMS\CmsBundle::class => ['all' => true],
```

#### Add routes

Add the routes to your /config/routes.yaml:
```YAML
cmsampbundle:
    resource: "@CmsAmpBundle/Resources/config/routes.yaml"
    prefix:   /
```

[packagist]: https://packagist.org/packages/revision-ten/cms
[composer]: http://getcomposer.org/

[badge-release]: https://img.shields.io/packagist/v/revision-ten/cms-amp.svg?style=flat-square
[badge-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[badge-downloads]: https://img.shields.io/packagist/dt/revision-ten/cms-amp.svg?style=flat-square

[release]: https://packagist.org/packages/revision-ten/cms-amp
[license]: https://github.com/RevisionTen/cms-amp/blob/master/LICENSE
[downloads]: https://packagist.org/packages/revision-ten/cms-amp


#### Transform AMP on the server

```
npm install @ampproject/toolbox-cli --save -g
npx amp optimize input.html > output.html
```
