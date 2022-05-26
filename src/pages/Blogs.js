import React from "react";

const Blogs = () => {
  return (
    <div class="bg-lightblue py-20 px-4">
      {/* <button onClick={}>TEST ADMIN</button> */}
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
            <p>
              There are several way to improve the performance of a react
              application. Some of them:
              <ul>
                <li>Use Production build. </li>
                <li>
                  React show us many warning. By removing them can optimize.
                </li>
                <li>By using conditional rendering.</li>
                <li>Using Caching function.</li>
              </ul>
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              What are the different ways to manage a state in a React
              application?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              There are many possible way to manage state in react. one is
              useState hook. First we have to import useState hook and then
              initialize the state. we can also manage state with react context
              which is help you to avoid pop drilling. We can aloso manage state
              with reactQuery which is also has caching thing.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              How does prototypical inheritance work?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              By prototypical inheritance, it is possible to access other object
              properties and methods. <br /> ChildObject.__proto__ =
              ParentObject their is two object ChildObject and ParentObject. by
              applying prototypical inheritance ChildObject can now access
              ParentObject properties and methods.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              For state management we use useState. When we use useState. it
              track the state. When the state get update. It tell react that
              this component and its children needs to re-rendered.Then react
              re-rendered it. If we do it directly. React can't track it. Cant
              re-rendered properly.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              You have an array of products. Each object has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              To find products by name will use products.find when it found
              object it will return that product. Code: products . find ( e = >
              e . name === ' searched _ name ' ) when it found the object it
              will return the obj.
            </p>
          </dd>
          <dt class="mb-4">
            <h3 class="text-xl font-semibold">
              What is a unit test? Why should write unit tests?
            </h3>
          </dt>
          <dd class="mb-16">
            <p>
              Unite test is a short function that test a small unit of
              production code's behavior. And it producing pass or fail result.
              By using unite testing developer can catch bugs before go to
              production. It also help to verify internal design and internal
              logic.
            </p>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Blogs;
