var React = require('react');
var {Close} = require('uikit');

var ClosePage = React.createClass({

  render: function() {

    return (
      <div>
        <!DOCTYPE html>
<html lang="en-gb" dir="ltr">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Close component - UIkit documentation</title>
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon-precomposed" href="images/apple-touch-icon.png">
        <link id="data-uikit-theme" rel="stylesheet" href="css/uikit.docs.min.css">
        <link rel="stylesheet" href="css/docs.css">
        <link rel="stylesheet" href="../vendor/highlight/highlight.css">
        <script src="../vendor/jquery.js"></script>
        <script src="js/uikit.min.js"></script>
        <script src="../vendor/highlight/highlight.js"></script>
        <script src="js/docs.js"></script>
    </head>

    <body class="tm-background">

        <nav class="tm-navbar uk-navbar uk-navbar-attached">
            <div class="uk-container uk-container-center">

                <a class="uk-navbar-brand uk-hidden-small" href="../index.html"><img class="uk-margin uk-margin-remove" src="images/logo_uikit.svg" width="90" height="30" title="UIkit" alt="UIkit"></a>

                <ul class="uk-navbar-nav uk-hidden-small">
                    <li><a href="documentation_get-started.html">Get Started</a></li>
                    <li class="uk-active"><a href="core.html">Core</a></li>
                    <li><a href="components.html">Components</a></li>
                    <li><a href="customizer.html">Customizer</a></li>
                    <li><a href="../showcase/index.html">Showcase</a></li>
                </ul>

                <a href="#tm-offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>

                <div class="uk-navbar-brand uk-navbar-center uk-visible-small"><img src="images/logo_uikit.svg" width="90" height="30" title="UIkit" alt="UIkit"></div>

            </div>
        </nav>

        <div class="tm-middle">
            <div class="uk-container uk-container-center">

                <div class="uk-grid" data-uk-grid-margin>
                    <div class="tm-sidebar uk-width-medium-1-4 uk-hidden-small">

                        <ul class="tm-nav uk-nav" data-uk-nav>

                            <li class="uk-nav-header">Defaults</li>
                            <li><a href="base.html">Base</a></li>
                            <li><a href="print.html">Print</a></li>

                            <li class="uk-nav-header">Layout</li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="panel.html">Panel</a></li>
                            <li><a href="article.html">Article</a></li>
                            <li><a href="comment.html">Comment</a></li>
                            <li><a href="utility.html">Utility</a></li>
                            <li><a href="flex.html">Flex</a></li>
                            <li><a href="cover.html">Cover</a></li>

                            <li class="uk-nav-header">Navigations</li>
                            <li><a href="nav.html">Nav</a></li>
                            <li><a href="navbar.html">Navbar</a></li>
                            <li><a href="subnav.html">Subnav</a></li>
                            <li><a href="breadcrumb.html">Breadcrumb</a></li>
                            <li><a href="pagination.html">Pagination</a></li>
                            <li><a href="tab.html">Tab</a></li>
                            <li><a href="thumbnav.html">Thumbnav</a></li>

                            <li class="uk-nav-header">Elements</li>
                            <li><a href="list.html">List</a></li>
                            <li><a href="description-list.html">Description list</a></li>
                            <li><a href="table.html">Table</a></li>
                            <li><a href="form.html">Form</a></li>

                            <li class="uk-nav-header">Common</li>
                            <li><a href="button.html">Button</a></li>
                            <li><a href="icon.html">Icon</a></li>
                            <li class="uk-active"><a href="close.html">Close</a></li>
                            <li><a href="badge.html">Badge</a></li>
                            <li><a href="alert.html">Alert</a></li>
                            <li><a href="thumbnail.html">Thumbnail</a></li>
                            <li><a href="overlay.html">Overlay</a></li>
                            <li><a href="text.html">Text</a></li>
                            <li><a href="animation.html">Animation</a></li>

                            <li class="uk-nav-header">JavaScript</li>
                            <li><a href="dropdown.html">Dropdown</a></li>
                            <li><a href="modal.html">Modal</a></li>
                            <li><a href="offcanvas.html">Off-canvas</a></li>
                            <li><a href="switcher.html">Switcher</a></li>
                            <li><a href="toggle.html">Toggle</a></li>
                            <li><a href="scrollspy.html">Scrollspy</a></li>
                            <li><a href="smooth-scroll.html">Smooth scroll</a></li>

                        </ul>

                    </div>
                    <div class="tm-main uk-width-medium-3-4">

                        <article class="uk-article">

                            <h1 class="uk-article-title">Close</h1>

                            <p class="uk-article-lead">Defines styles for a close button that can be combined with different components.</p>

                            <h2 id="usage"><a href="#usage" class="uk-link-reset">Usage</a></h2>

                            <p>To apply this component, add the <code>.uk-close</code> class to an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <a href="#" class="uk-close"></a>

                            <h3 class="tm-article-subtitle">Markup</h3>

<pre><code>&lt;a href="" class="uk-close"&gt;&lt;/a&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="style-modifier"><a href="#style-modifier" class="uk-link-reset">Style modifier</a></h2>

                            <p>Add the <code>.uk-close-alt</code> class to apply an alternative styling to the close button.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <a href="#" class="uk-close uk-close-alt"></a>

                            <h3 class="tm-article-subtitle">Markup</h3>

<pre><code>&lt;a href="" class="uk-close uk-close-alt"&gt;&lt;/a&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="close-in-alerts"><a href="#close-in-alerts" class="uk-link-reset">Close in alerts</a></h2>

                            <p>This is an example of how this component is used with an alert box from the <a href="alert.html">Alert component</a>.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <div class="uk-alert uk-alert-success" data-uk-alert>
                                <a href="#" class="uk-alert-close uk-close"></a>
                                <p>This is a alert using an a element as close button.</p>
                            </div>

                            <hr class="uk-article-divider">

                            <h2 id="close-in-modals"><a href="#close-in-modals" class="uk-link-reset">Close in modals</a></h2>

                            <p>This is an example of how this component is used with the <a href="modal.html">Modal component</a>.</p>

                            <h3 class="tm-article-subtitle">Example</h3>

                            <p>
                                <button class="uk-button" data-uk-modal="{target:'#modal'}">Button</button>
                            </p>

                            <div id="modal" class="uk-modal">
                                <div class="uk-modal-dialog uk-modal-dialog-lightbox">
                                    <button type="button" class="uk-modal-close uk-close uk-close-alt"></button>
                                    <img src="images/placeholder_600x400.svg" width="600" height="400" alt="">
                                </div>
                            </div>

                        </article>

                    </div>
                </div>

            </div>
        </div>

        <div class="tm-footer">
            <div class="uk-container uk-container-center uk-text-center">

                <ul class="uk-subnav uk-subnav-line uk-flex-center">
                    <li><a href="http://github.com/uikit/uikit">GitHub</a></li>
                    <li><a href="http://github.com/uikit/uikit/issues">Issues</a></li>
                    <li><a href="http://github.com/uikit/uikit/blob/master/CHANGELOG.md">Changelog</a></li>
                    <li><a href="https://twitter.com/getuikit">Twitter</a></li>
                </ul>

                <div class="uk-panel">
                    <p>Made by <a href="http://www.yootheme.com">YOOtheme</a> with love and caffeine.<br>Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
                    <a href="../index.html"><img src="images/logo_uikit.svg" width="90" height="30" title="UIkit" alt="UIkit"></a>
                </div>

            </div>
        </div>

        <div id="tm-offcanvas" class="uk-offcanvas">

            <div class="uk-offcanvas-bar">

                <ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav="{multiple:true}">
                    <li class="uk-parent"><a href="#">Documentation</a>
                        <ul class="uk-nav-sub">
                            <li><a href="documentation_get-started.html">Get started</a></li>
                            <li><a href="documentation_how-to-customize.html">How to customize</a></li>
                            <li><a href="documentation_layouts.html">Layout examples</a></li>
                            <li><a href="core.html">Core</a></li>
                            <li><a href="components.html">Components</a></li>
                            <li><a href="documentation_project-structure.html">Project structure</a></li>
                            <li><a href="documentation_less-sass.html">Less &amp; Sass files</a></li>
                            <li><a href="documentation_create-a-theme.html">Create a theme</a></li>
                            <li><a href="documentation_create-a-style.html">Create a style</a></li>
                            <li><a href="documentation_customizer-json.html">Customizer.json</a></li>
                            <li><a href="documentation_javascript.html">JavaScript</a></li>
                            <li><a href="documentation_custom-prefix.html">Custom prefix</a></li>
                        </ul>
                    </li>
                    <li class="uk-nav-header">Core</li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-wrench"></i> Defaults</a>
                        <ul class="uk-nav-sub">
                            <li><a href="base.html">Base</a></li>
                            <li><a href="print.html">Print</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-th-large"></i> Layout</a>
                        <ul class="uk-nav-sub">
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="panel.html">Panel</a></li>
                            <li><a href="article.html">Article</a></li>
                            <li><a href="comment.html">Comment</a></li>
                            <li><a href="utility.html">Utility</a></li>
                            <li><a href="flex.html">Flex</a></li>
                            <li><a href="cover.html">Cover</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-bars"></i> Navigations</a>
                        <ul class="uk-nav-sub">
                            <li><a href="nav.html">Nav</a></li>
                            <li><a href="navbar.html">Navbar</a></li>
                            <li><a href="subnav.html">Subnav</a></li>
                            <li><a href="breadcrumb.html">Breadcrumb</a></li>
                            <li><a href="pagination.html">Pagination</a></li>
                            <li><a href="tab.html">Tab</a></li>
                            <li><a href="thumbnav.html">Thumbnav</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-check"></i> Elements</a>
                        <ul class="uk-nav-sub">
                            <li><a href="list.html">List</a></li>
                            <li><a href="description-list.html">Description list</a></li>
                            <li><a href="table.html">Table</a></li>
                            <li><a href="form.html">Form</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent uk-active"><a href="#"><i class="uk-icon-folder-open"></i> Common</a>
                        <ul class="uk-nav-sub">
                            <li><a href="button.html">Button</a></li>
                            <li><a href="icon.html">Icon</a></li>
                            <li><a href="close.html">Close</a></li>
                            <li><a href="badge.html">Badge</a></li>
                            <li><a href="alert.html">Alert</a></li>
                            <li><a href="thumbnail.html">Thumbnail</a></li>
                            <li><a href="overlay.html">Overlay</a></li>
                            <li><a href="text.html">Text</a></li>
                            <li><a href="animation.html">Animation</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-magic"></i> JavaScript</a>
                        <ul class="uk-nav-sub">
                            <li><a href="dropdown.html">Dropdown</a></li>
                            <li><a href="modal.html">Modal</a></li>
                            <li><a href="offcanvas.html">Off-canvas</a></li>
                            <li><a href="switcher.html">Switcher</a></li>
                            <li><a href="toggle.html">Toggle</a></li>
                            <li><a href="scrollspy.html">Scrollspy</a></li>
                            <li><a href="smooth-scroll.html">Smooth scroll</a></li>
                        </ul>
                    </li>
                    <li class="uk-nav-header">Components</li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-th-large"></i> Layout</a>
                        <ul class="uk-nav-sub">
                            <li><a href="grid-js.html">Dynamic Grid</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-bars"></i> Navigations</a>
                        <ul class="uk-nav-sub">
                            <li><a href="dotnav.html">Dotnav</a></li>
                            <li><a href="slidenav.html">Slidenav</a></li>
                            <li><a href="pagination-js.html">Dynamic Pagination</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-folder-open"></i> Common</a>
                        <ul class="uk-nav-sub">
                            <li><a href="form-advanced.html">Form advanced</a></li>
                            <li><a href="form-file.html">Form file</a></li>
                            <li><a href="form-password.html">Form password</a></li>
                            <li><a href="form-select.html">Form select</a></li>
                            <li><a href="placeholder.html">Placeholder</a></li>
                            <li><a href="progress.html">Progress</a></li>
                        </ul>
                    </li>
                    <li class="uk-parent"><a href="#"><i class="uk-icon-magic"></i> JavaScript</a>
                        <ul class="uk-nav-sub">
                            <li><a href="lightbox.html">Lightbox</a></li>
                            <li><a href="autocomplete.html">Autocomplete</a></li>
                            <li><a href="datepicker.html">Datepicker</a></li>
                            <li><a href="htmleditor.html">HTML editor</a></li>
                            <li><a href="slideshow.html">Slideshow</a></li>
                            <li><a href="accordion.html">Accordion</a></li>
                            <li><a href="notify.html">Notify</a></li>
                            <li><a href="search.html">Search</a></li>
                            <li><a href="nestable.html">Nestable</a></li>
                            <li><a href="sortable.html">Sortable</a></li>
                            <li><a href="sticky.html">Sticky</a></li>
                            <li><a href="timepicker.html">Timepicker</a></li>
                            <li><a href="tooltip.html">Tooltip</a></li>
                            <li><a href="upload.html">Upload</a></li>
                        </ul>
                    </li>
                    <li class="uk-nav-divider"></li>
                    <li><a href="../showcase/index.html">Showcase</a></li>
                </ul>

            </div>

        </div>

    </body>
</html>
        <h2>Close:</h2>
        <Close></Close>
        <Close alt={true}></Close>
      </div>
    );
  }

});

module.exports = ClosePage;