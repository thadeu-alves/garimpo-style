export default function Section({ children }) {
    return (
        <section class="flex flex-col gap-8 justify-center items-center px-6">
            {children}
        </section>
    );
}
