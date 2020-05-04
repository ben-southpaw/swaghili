export default {
    sad: {
        index: 0,
        images: [
            'kanye-faces/face-sad-1.jpg',
            'kanye-faces/face-sad-2.png',
            'kanye-faces/face-sad-3.png'
        ]
    },
    neutral: {
        index: 0,
        images: [
            'kanye-faces/face-neutral-1.jpg',
            'kanye-faces/face-neutral-2.jpg',
            'kanye-faces/face-neutral-3.jpg'
        ]
    },
    happy: {
        index: 0,
        images: [
            'kanye-faces/face-happy-1.jpg',
            'kanye-faces/face-happy-2.jpg',
            'kanye-faces/face-happy-3.jpg'
        ]
    }
}
const getWellbeing = val => {
    const wellbeing = {};

    if (val < -0.25) {
        wellbeing.face = 'sad';
        wellbeing.text = 'A bit grumps';

        if (val < 0.5) wellbeing.text = 'very shitty'
    } else if (val > -0.25 && val < 0.25) {
        wellbeing.face = 'neutral';
        wellbeing.text = 'quite neutral. Meh!';
    } else {
        wellbeing.face = 'happy';
        wellbeing.text = 'a bit chuffed';

        if (val > 0.5) wellbeing.text = 'super chuffed';
    }

    return wellbeing;
};

export { getWellbeing };