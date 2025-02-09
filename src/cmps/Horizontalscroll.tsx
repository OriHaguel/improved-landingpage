import { IconCloud } from "@/components/magicui/icon-cloud"

const slugs = [
    "nodedotjs",
    "react",
    "redux",
    "nestjs",
    "sass",
    "html5",
    "css3",
    "javascript",
    "typescript",
    "github",
    "mongodb",
    "vite",
]

export default function IconCloudDemo() {
    const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`)

    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background">
            <IconCloud images={images} />
        </div>
    )
}