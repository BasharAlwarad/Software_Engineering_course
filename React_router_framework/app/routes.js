import { index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  // index('routes/home.jsx', {
  //   loader: async () => {
  //     const res = await fetch(`http://localhost:3001/api/users`);
  //     return res.json();
  //   },
  //   clientLoader: async () => {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //     return res.json();
  //   },
  // }),
  index(`routes/home.jsx`),

  route(`about`, `routes/about.jsx`),
  route(`post/:postId`, `routes/post.jsx`),
  //   nested routes
  // layout(`routes/dashboard.jsx`, [
  //   ...prefix(`dashboard`, [
  //     route(`finance`, `routes/finance.jsx`),
  //     route(`personal-info`, `routes/personal-info.jsx`),
  //   ]),
  // ]),
  route(`dashboard`, `routes/dashboard.jsx`, [
    route(`finance`, `routes/finance.jsx`),
    route(`personal-info`, `routes/personal-info.jsx`),
  ]),
];
