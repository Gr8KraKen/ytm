#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

// ---------------------------------------------------------
// YTMusicUltimate
// This is a boilerplate Logos file for tweaking YouTube Music.
// Expand these hooks depending on the app's current headers.
// ---------------------------------------------------------

%hook YTIPlayabilityStatus

// Example: Enable background playback for all users
- (BOOL)isPlayableInBackground {
    return YES;
}

%end

%hook YTIGuideResponse

// Add additional UI modifications or ad-removal hooks here
// Ensure you check the latest application headers for compatibility

%end

// Add a simple launch alert to confirm the tweak injected successfully
%hook UIApplication

- (void)applicationDidBecomeActive:(UIApplication *)application {
    %orig;

    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(3.0 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"YTMusicUltimate" 
                                                                           message:@"Tweak successfully loaded! Enjoy." 
                                                                    preferredStyle:UIAlertControllerStyleAlert];
            
            UIAlertAction *ok = [UIAlertAction actionWithTitle:@"Dismiss" style:UIAlertActionStyleDefault handler:nil];
            [alert addAction:ok];
            
            UIViewController *rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
            [rootVC presentViewController:alert animated:YES completion:nil];
        });
    });
}

%end
