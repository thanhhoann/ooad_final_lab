import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Link from "next/link";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const topics = [
    { num: "1", description: "The New Student Enrollment Process" },
    {
      num: "2",
      description:
        "The Student Stand-downs/Suspensions/Exclusions/Expulsions Process",
    },
    { num: "3", description: "The Graduation Application Process" },
    { num: "4", description: "The Course Registration Process" },
    { num: "5", description: "The Tuition Fee Payment Process" },
    { num: "6", description: "The Grading Process for students" },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>OOAD Lab 7 and 8</title>
        </Head>
        <Container>
          <Intro />
          <div>
            <div className="flex flex-col justify-between ">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="w-full p-3 m-5 text-white bg-black rounded-md hover:bg-gray-700"
                >
                  <Link href={`/posts/topic_${topic.num}`}>
                    <a>
                      <div className="flex items-center justify-between">
                        <div className="p-2 font-bold text-black bg-gray-100 rounded-md">
                          Topic {topic.num}
                        </div>
                        <div className="text-xl">{topic.description}</div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
