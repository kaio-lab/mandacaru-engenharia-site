from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1] / "public" / "media"
MAX_EDGE = 1600

for path in ROOT.rglob("*"):
    if path.suffix.lower() not in {".jpg", ".jpeg", ".webp"}:
        continue
    try:
        with Image.open(path) as source:
            image = ImageOps.exif_transpose(source)
            if max(image.size) > MAX_EDGE:
                image.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
            if path.suffix.lower() in {".jpg", ".jpeg"}:
                if image.mode not in {"RGB", "L"}:
                    image = image.convert("RGB")
                image.save(path, "JPEG", quality=82, optimize=True, progressive=True)
            else:
                image.save(path, "WEBP", quality=82, method=6)
    except OSError:
        continue
