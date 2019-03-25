import { BASE_DIR } from '../constants.yml'
import CanvasUtil from '@/lib/CanvasUtil';

const canvas = new CanvasUtil(document.getElementById('canvas'));

// size set
canvas.matchSize();
// clear
canvas.clear();

// test
canvas.fillCircle(200, 100, 40, '#000000');