let audio: HTMLAudioElement | null = null;

export function playFlipSound() {
  if (typeof window === "undefined") return;
  try {
    if (!audio) {
      audio = new Audio("/sounds/sounds-02.mp3");
      audio.volume = 0.5;
    }
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Browser blokir autoplay sebelum interaksi pertama — diamkan
    });
  } catch {
    // Audio tidak didukung — gagal diam-diam, jangan ganggu UX
  }
}