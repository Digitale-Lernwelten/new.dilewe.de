const images = import.meta.glob<{ default: ImageMetadata }>('./*.{jpg,jpeg,png}', { eager: true });

export const galleryImages = Object.values(images).map((img) => img.default);
