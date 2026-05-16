TARGET := iphone:clang:latest:14.0
INSTALL_TARGET_PROCESSES = YouTubeMusic
ARCHS = arm64 arm64e

include $(THEOS)/makefiles/common.mk

TWEAK_NAME = YTMusicUltimate

YTMusicUltimate_FILES = Tweak.xm
YTMusicUltimate_CFLAGS = -fobjc-arc

include $(THEOS_Makefiles)/tweak.mk
