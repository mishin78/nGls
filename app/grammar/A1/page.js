'use client'
import Levels from "@/app/components/levels"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'

export default function Elementary() {

    const searchParams = useSearchParams()
    const section = searchParams.get('section')
    const level = searchParams.get('level')

    return (
        <main className="сategory grammar A1">
            <Levels />
            <div className="exercises">
                <Link href='/grammar/A1/test0' className="box">
                    <div>Konjugation im Präsens</div>
                </Link>
                <Link href='/grammar/A1/test1' className="box">
                    <div>Verben mit Vokalwechsel</div>
                </Link>
                <Link href='/grammar/A1/test2' className="box">
                    <div>Verben mit Akkusativ</div>
                </Link>
                <Link href='/grammar/A1/test3' className="box">
                    <div>Trennbare Verben</div>
                </Link>
                <Link href='/grammar/A1/test4' className="box">
                    <div>Perfekt</div>
                </Link>
                <Link href='/grammar/A1/nomen' className="box">
                    <div>Nomen</div>
                </Link>
                <Link href='/grammar/A1/test1' className="box">
                    <div>nothing</div>
                </Link>
                <Link href='/grammar/A1/test1' className="box">
                    <div>nothing</div>
                </Link>
                <Link href='/grammar/A1/test1' className="box">
                    <div>nothing</div>
                </Link>
                <Link href='/grammar/A1/test1' className="box">
                    <div>nothing</div>
                </Link>
                <Link href='/grammar/A1/test1' className="box">
                    <div>nothing</div>
                </Link>
                <Link href='/grammar/A1/test1' className="box">
                    <div>nothing</div>
                </Link>
            </div>
        </main>
    )
}