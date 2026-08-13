from PIL import Image
import os

files = [
    ('src/assets/images/hero1.png', 'hero1_thumb.png'),
    ('src/assets/images/hero2.png', 'hero2_thumb.png'),
    ('public/images/Hero3.png', 'Hero3_thumb.png'),
    ('public/images/hero4.png', 'hero4_thumb.png')
]

for src, dst in files:
    if os.path.exists(src):
        img = Image.open(src)
        # Create a 100px wide thumbnail
        thumb = img.resize((100, int(100 * img.size[1] / img.size[0])))
        thumb.save(dst)
        print(f'Saved {dst}: {thumb.size}')
