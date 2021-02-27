const formatVolumeIconPath = require('../assets/scripts/main');
describe("test slider", () => {
    test('volume > 66', () => {
        expect(formatVolumeIconPath(100)).toBe('./assets/media/icons/volume-level-3.svg');
        expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('33 < volume < 66', () => {
        expect(formatVolumeIconPath(66)).toBe('./assets/media/icons/volume-level-2.svg');
        expect(formatVolumeIconPath(34)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('0 < volume < 33', () => {
        expect(formatVolumeIconPath(33)).toBe('./assets/media/icons/volume-level-1.svg');
        expect(formatVolumeIconPath(1)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('volume = 0', () => {
        expect(formatVolumeIconPath(0)).toContain('./assets/media/icons/volume-level-0.svg');
    });
})