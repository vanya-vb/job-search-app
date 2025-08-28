import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
        >
      </section>
    </>
  )
}