export interface IPostEmail {
    email: string,
    assunto: string,
    corpo: string
}

export async function PostEmail(body: IPostEmail) {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/Email/PostEmailDuvidas`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }
    );

    const text = await response.text();

    let data: any = null;

    try {
        data = text ? JSON.parse(text) : null;
    } catch {
        data = text;
    }


    if (!response.ok) {
        if (Array.isArray(data?.erro)) {
            throw new Error(data.erro.join("\n"));
        }

        if (typeof data?.erro === "string") {
            throw new Error(data.erro);
        }

        if (typeof data?.error === "string") {
            throw new Error(data.error);
        }

        throw new Error("Erro ao mandar email.");
    }

    return data;
}