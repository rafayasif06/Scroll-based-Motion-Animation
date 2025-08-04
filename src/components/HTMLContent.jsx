import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function HTMLContent({ value }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, value => Math.round(value))

    useEffect(() => {
        const animation = animate(count, 100, {
            duration: 1,
            ease: "easeOut"
        })

        return animation.stop
    }, [])

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <motion.h1 
                className="text-8xl font-bold text-teal-300 flex items-center gap-2"
                style={{ fontSize: "120px" }}
            >
                <motion.span>{rounded}</motion.span>
                <motion.span>{value}</motion.span>
            </motion.h1>
        </div>
    )
}
