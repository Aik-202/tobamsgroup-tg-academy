import Link from "next/link";

export default function Legalnformation() {
  return (
    <section>
        <p> Copyright &copy; Tobams Group, 2024. All rights reserved.</p>

        <nav aria-label="Legal Navigation">
            <ul>
                <li><Link href="/terms-of-service">Terms and Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/cookies-policy">Cookies Policy</Link></li>
            </ul>
        </nav>
    </section>
  )
}
