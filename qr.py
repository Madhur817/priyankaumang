from PIL import Image, ImageDraw, ImageFont

logo = Image.new("RGBA", (200, 200), (255, 255, 255, 0))
draw = ImageDraw.Draw(logo)
font = ImageFont.load_default()
draw.text((50, 50), "", fill=(255, 105, 180, 255), font=font)
logo.save("logo.png")
