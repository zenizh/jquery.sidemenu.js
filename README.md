# jquery.sidemenu.js

jquery.sidemenu.js is the simplest side menu plugin (so-called on and off canvas menu).

This plugin is compatible with [Turbolinks](https://github.com/rails/turbolinks).

## Download

- https://github.com/kami-zh/jquery.sidemenu.js/archive/master.zip

## Demo

The side menu is moving smoothly because it is switched with the device's GPU.

![](doc/1.gif)

## Usage

Include `jquery.sidemenu.css`, [jQuery](https://jquery.com/) and `jquery.sidemenu.js`:

```html
<link rel="stylesheet" href="jquery.sidemenu.css">
<script src="jquery.js"></script>
<script src="jquery.sidemenu.js"></script>
```

Add `data-*` and `#sidemenu` according to the following example:

```html
<div data-role="sidemenu-container" data-sidemenu-dir="right">
  <div id="sidemenu">
    <ul>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Menu</a></li>
      <li class="divider"></li>
      <li><a href="#" data-role="sidemenu-toggle">Close</a></li>
    </ul>
  </div>

  <a href="#" data-role="sidemenu-toggle">Open side menu</a>
</div>
```

`data-sidemenu-dir` can be set `left` or `right` direction.

## Contributing

1. Fork it ( https://github.com/kami-zh/jquery.sidemenu.js/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
