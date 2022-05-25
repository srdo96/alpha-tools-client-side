import React from "react";

const Blogs = () => {
  return (
    <div class="bg-lightblue py-20 px-4">
      <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 class="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
          My Awesome Blogs
        </h2>
        <dl class="w-full md:w-2/3">
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              How will you improve the performance of a React Application?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>Ans 1</p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              What are the different ways to manage a state in a React
              application?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>Ans 2</p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              How does prototypical inheritance work?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>Ans 3</p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h3>
          </dt>
          <dd class="mb-16">
            <p>Ans 4</p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              You have an array of products. Each object has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>Ans 5</p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              What is a unit test? Why should write unit tests?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>Ans 6</p>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Blogs;
