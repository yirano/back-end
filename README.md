# back-end
Backend to the Lambda School Expat Journal
#### API

These are our current endpoints:

-   `GET /api/users/:id` - gets user by ID
-   `GET /api/stories/:id/photos` - gets all photos for a story
-   `GET /api/photos/:id` - gets photo by ID
-   `POST /api/auth/register` - adds a new user
-   `POST /api/auth/login` - authenticates the user
-   `POST /api/stories` - adds a new story
-   `POST /api/stories/:id/photos` - adds a new photo to the story
-   `PUT /api/users/:id` - updates a users info by id
-   `PUT /api/stories/:id` - updates a given scheme by id
-   `PUT /api/photos/:id` - updates a given scheme by id
-   `DELETE /api/users/:id` - removes a user by id
-   `DELETE /api/stories/:id` - removes a story by id
-   `DELETE /api/photos/:id` - removes a photo by id

### Entities
example of what a post to `/api/stories/:id/photos` would expect
