React And MaterialUI
==============================

The versions used are as below.

Versions
--------------
 - material-ui  : 0.15.0-alpha.1
 - react        : 15.0.0-rc.1
 - react-dom    : 15.0.0-rc.1
 - react-router : 2.0.0

Bug
-------------
There seems to be a Bug on [React 15.0.0-rc-1][react-bug-1]

Note
----------
Reverted to [react version 0.14.7][repo-diff-1]          

Continuing the work further, this project now uses the following versions

- material-ui   : 0.15.0-alpha.1
- react         : 0.14.7
- react-dom     : 0.14.7
- react-router  : 2.0.0

TODO
----------------

Bug fix
 - Adding same date twice throws error
 - Add a clear button to clear all the previous counts
 - Save data, locally first
 - Save data on server
 - Update to the latest versions of react and materialui / make another project for doing the same



[1]: https://github.com/saumya/ReactRouter-102
[2]: http://www.material-ui.com/
[3]: https://www.npmjs.com/package/material-ui
[4]: https://www.npmjs.com/package/react-tap-event-plugin
[react-bug-1]: https://github.com/facebook/react/issues/6221
[repo-diff-1]: https://github.com/saumya/React-MaterialUI-102/commit/6921343f70934e056c93d3d46e1148daaf52a0f3
[ref-1]: https://github.com/callemall/material-ui/blob/master/src/date-picker/date-picker-dialog.jsx
[ref-2-so]: http://stackoverflow.com/questions/35378272/render-full-calendar-of-datepicker-on-a-page
