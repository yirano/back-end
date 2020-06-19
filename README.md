# back-end
Backend to the Lambda School Expat Journal
#### API

The following endpoints are available to test the functionality of the model methods.

-   `GET /api/users/:id` - gets user by ID
-   `GET /api/stories/:id/photos` - gets all photos for a story
-   `GET /api/photos/:id` - gets photo by ID
-   `POST /api/auth/register` - adds a new user
-   `POST /api/auth/login` - authenticates the user
-   `POST /api/stories` - adds a new story
-   `POST /api/stories/:id/photos` - adds a new photo to the story
-   `PUT /api/users/:id` - updates a users info
-   `PUT /api/stories/:id` - updates a given scheme
-   `PUT /api/photos/:id` - updates a given scheme
-   `DELETE /api/schemes/:id` - removes a given scheme and all associated steps

### Entities

A `project` is what needs to be done. We want to store the following data about a `project`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.
- [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.

The database should not allow resources with duplicate names.

A `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

- [ ] a unique ID.
- [ ] a description of what needs to be done. This column is required.
- [ ] a notes column to add additional information.
- [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.
