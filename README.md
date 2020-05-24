# Template Symfony React

This template is set to run symfony with [reactjs](https://reactjs.org/).

## Installation

1. Use the package manager [composer](https://getcomposer.org/) to install php dependencies.

```bash
composer install
```

2. Use the package manager [yarn](https://yarnpkg.com/) to install react dependencies.

```bash
yarn install
```

## Description

This template use Limenius React Bundle like provider of props and webpack encore to render javascripts. In your twig template, add ```{{ react_component('ReactRoot', {'props': props}) }}``` to render your React Component and ```{{ encore_entry_script_tags('app') }}``` inside the block ```javascripts``` to run js. So to use reactjs in your project, please read their documentation (link below). If you want to custom you own config webpack encore, symfony have already full documentation in their website.

## More Documentation

- [LimeniusReactBundle](https://github.com/Limenius/ReactBundle/blob/master/Resources/doc/index.md)
- [WebpackEncore](https://symfony.com/doc/current/frontend.html#webpack-encore)

## Test

1. Run script to compile js files :
```bash 
yarn run build-devall
```
2. Run via symfony cli to serve our server :
```bash 
symfony sever:start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Unlicence](https://unlicense.org)