export interface Post{
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
    {
    id: 1,
    slug: "getting-started-with-my-blog",
    title: "Getting Started With My Blog",
    content:
      "I built this blog as part of my learning journey with React. It helps me understand routing, components, and how real applications are structured.",
  },
  {
    id: 2,
    slug: "understanding-react-router",
    title: "Understanding React Router",
    content:
      "React Router allows us to create multiple pages in a single-page application. In this project, I used dynamic routing to display blog posts based on the URL.",
  },
  {
    id: 3,
    slug: "what-is-dynamic-routing",
    title: "What is Dynamic Routing?",
    content:
      "Dynamic routing means creating routes based on data instead of hardcoding them. For example, each blog post has its own URL using a slug.",
  },
  {
    id: 4,
    slug: "how-i-built-auth-context",
    title: "How I Built AuthContext",
    content:
      "I used React Context to simulate authentication. It stores whether a user is logged in and allows login and logout functionality across the app.",
  },
  {
    id: 5,
    slug: "protected-routes-explained",
    title: "Protected Routes Explained",
    content:
      "Protected routes prevent users from accessing certain pages unless they are logged in. I used a custom component to redirect users to the login page.",
  },
  {
    id: 6,
    slug: "challenges-i-faced",
    title: "Challenges I Faced While Building This",
    content:
      "One challenge I faced was understanding how useParams works. Another was managing state across components. But practicing step by step helped a lot.",
  },
  {
    id: 7,
    slug: "next-steps-in-my-learning",
    title: "Next Steps in My Learning",
    content:
      "Next, I want to connect this app to a backend using Node.js and MongoDB so that posts can be stored in a database instead of static data.",
  },
]