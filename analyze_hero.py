from PIL import Image
import os

files = [
    'src/assets/images/hero1.png',
    'src/assets/images/hero2.png',
    'public/images/Hero3.png',
    'public/images/hero4.png'
]

for f in files:
    if os.path.exists(f):
        img = Image.open(f).convert('RGB')
        w, h = img.size
        print(f'\n=== {os.path.basename(f)} ({w}x{h}) ===')
        for pct in [0.25, 0.5, 0.75]:
            x = int(w * pct)
            col = list(img.crop((x, 0, x+1, h)).getdata())
            segments = []
            for i in range(10):
                y_start = int(h * i / 10)
                y_end = int(h * (i + 1) / 10)
                segment = col[y_start:y_end]
                avg = sum(sum(p)/3 for p in segment) / len(segment)
                segments.append(f"{avg:.0f}")
            print(f'  Col {int(pct*100)}%: {" | ".join(segments)}')
        
        print('  Horizontal slices:')
        for pct in [0.3, 0.5, 0.7]:
            y = int(h * pct)
            row = list(img.crop((0, y, w, y+1)).getdata())
            segments = []
            for i in range(10):
                x_start = int(w * i / 10)
                x_end = int(w * (i + 1) / 10)
                segment = row[x_start:x_end]
                avg = sum(sum(p)/3 for p in segment) / len(segment)
                segments.append(f"{avg:.0f}")
            print(f'    Row {int(pct*100)}%: {" | ".join(segments)}')
