declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

function send(event: string, params?: Record<string, any>) {
    if (typeof window === "undefined") return;

    window.gtag?.("event", event, params);
}

export function trackViewItem(
    id: string,
    nome: string,
    preco: number
) {
    send("view_item", {
        currency: "BRL",
        value: preco,
        items: [
            {
                item_id: id,
                item_name: nome,
                price: preco,
            },
        ],
    });
}

export function trackSelectItem(
    id: string,
    nome: string,
    preco: number
) {
    send("select_item", {
        currency: "BRL",
        value: preco,
        items: [
            {
                item_id: id,
                item_name: nome,
                price: preco,
            },
        ],
    });
}

export function trackSearch(searchTerm: string) {
    send("search", {
        search_term: searchTerm,
    });
}

export function trackGenerateLead() {
    send("generate_lead");
}