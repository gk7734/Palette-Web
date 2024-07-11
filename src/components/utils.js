export const createScrollTrigger = (trigger, config) => ({
    trigger,
    start: 'top bottom',
    end: 'top top',
    ...config
});

export const animateBackground = (timeline, element, fromColor, toColor, scrollTriggerConfig) => {
    timeline.fromTo(element,
        { background: fromColor },
        {
            background: toColor,
            duration: 1,
            ease: 'none',
            scrollTrigger: createScrollTrigger(element, scrollTriggerConfig)
        }
    );
};
