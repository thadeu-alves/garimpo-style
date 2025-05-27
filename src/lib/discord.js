export async function handleDiscord({ titulo }) {
    console.log("hello");
    try {
        const res = await fetch(
            "https://discord.com/api/webhooks/1376663907586019458/5Y9KqQGI1aYMRs7H_ZokLHMm-vdiMdz7BUN3D0bpE_6UgqJQ5l-rKxrKFwVg7yOr7Nx3",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: "Produto",
                    username: "Novo clique em: " + titulo,
                    avatar_url: "",
                }),
            }
        );

        if (res.ok) {
            console.log("Mensagem enviada com sucesso!");
        } else {
            console.error(
                "Erro ao enviar mensagem:",
                res.status,
                await res.text()
            );
        }
    } catch (error) {
        console.error("Erro na solicitação:", error);
    }
}
