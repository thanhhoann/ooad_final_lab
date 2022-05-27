import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import PostSubtTitle from "../components/post-subtitle";

export default function PostHeader({ title, sub_title }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostSubtTitle>{sub_title}</PostSubtTitle>
    </>
  );
}
