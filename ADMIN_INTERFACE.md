# Admin interface

The admin UI follows the layouts in `design guide/bright-haven-admin` and runs inside the existing React 18 / React Router / Tailwind 3 application. The reference project remains unchanged and is not a runtime dependency.

## Routes

- `/#/login`: Sydney Harbour login page, reached from the public footer.
- `/#/admin`: dashboard.
- `/#/admin/events`: searchable events with category filtering.
- `/#/admin/gallery`: community photos with an accessible full-size viewer.
- `/#/admin/testimonials`: searchable sample stories.
- `/#/admin/business-categories`: searchable sample categories.

Hash routes preserve compatibility with the existing static/cPanel deployment.

## Preview behavior

This implements the guide's UI preview, not production authentication or a content management backend. A valid email format and any nonempty password open the preview. Neither field is stored or submitted. Session storage remembers only whether the preview is open; this is not a security boundary. Sign-out clears that flag. A direct admin link returns to its requested section after entering the preview.

Events, testimonials, business counts, and the profile are illustrative. Gallery photos come from the existing community assets. There are no publishing or database writes.

## Design and accessibility

Admin colors are scoped to `.admin-ui` in `src/components/admin/admin.css`. Theme preference is local to this workspace and saved in browser local storage. The public site does not inherit the admin theme.

The desktop sidebar collapses; mobile navigation uses a focus-trapped dialog. Help, profile menus, and the gallery use Radix primitives for keyboard navigation, dismissal, and focus restoration. The gallery supports previous/next buttons and arrow keys. Admin route code is lazy-loaded.

Before connecting live records, replace the preview flow with server-validated authentication and authorization, and replace sample content with the backend data source.
