import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/postService";

export function Post() {
  const { slug } = useParams();

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (!slug) return;

        const data = await getPost(slug);

        setPost(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-32">
        Cargando artículo...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-32">
        Artículo no encontrado
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-32">
      <h1 className="mb-4 text-5xl font-bold text-white">
        {post.title}
      </h1>

      <p className="mb-8 text-gray-400">
        {post.author}
      </p>

      {post.featured_image && (
        <img
          src={`http://127.0.0.1:8000/storage/${post.featured_image}`}
          alt={post.title}
          className="mb-8 w-full rounded-xl"
        />
      )}

      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </article>
  );
}