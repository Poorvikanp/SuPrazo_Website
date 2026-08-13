from moviepy import VideoFileClip
import os

videos = [
    'public/videos/suprazo_technology.mp4',
    'public/videos/Suprathon_Hack.mp4'
]

for v in videos:
    if os.path.exists(v):
        clip = VideoFileClip(v)
        print(f'{os.path.basename(v)}: {clip.size} {clip.duration:.1f}s')
        # Save a frame at 25% of the video
        frame = clip.get_frame(0.25)
        from PIL import Image
        img = Image.fromarray(frame)
        img.save(f'{os.path.basename(v)}_frame.png')
        print(f'  Saved frame: {img.size}')
        clip.close()
