import Header from "@/components/Header";
import { MyComponent } from "@/components/MyComponent";
import Link from "next/link";

export default function About() {
    return (
        <div>
            <Header />
            <br />
            <br />
            <MyComponent/>

            <br />
            <MyComponent/>

        </div>
    );
}