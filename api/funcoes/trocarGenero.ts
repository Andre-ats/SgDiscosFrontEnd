export function trocarGenero(genero: string) {
    return genero
        .replace("RnB", "R&B")
        .replace("HipHop", "Hip Hop")
        .replace("BossaNova", "Bossa Nova")
        .replace("DrumAndBass", "Drum & Bass")
        .replace("FunkBrasileiro", "Funk Brasileiro")
        .replace("LoFi", "Lo-Fi");
}