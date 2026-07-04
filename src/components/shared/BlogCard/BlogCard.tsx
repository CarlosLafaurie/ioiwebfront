import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../../ui/Card";
import type { BlogPost } from "../../../types/testimonial";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="h-full">
      <Card
        interactive
        className="group flex h-full cursor-pointer flex-col gap-6 p-7"
      >
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em]">
          <span className="font-mono text-ink-700">
            {post.category}
          </span>

          <span className="font-mono text-ink-600">
            {post.readTime}
          </span>
        </div>

        <h3 className="font-display text-[22px] leading-snug tracking-[-0.02em] text-white">
          {post.title}
        </h3>

        <p className="text-[14px] leading-relaxed text-ink-700">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-ink-400/60 pt-5">
          <span className="text-[12px] text-ink-600">
            {post.date}
          </span>

          <span className="flex items-center gap-1.5 text-[13px] text-ink-800 transition-colors duration-300 group-hover:text-white">
            Leer artículo

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </span>
        </div>
      </Card>
    </Link>
  );
}