import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

// TODO: Update with your actual education and work history
export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'Manav Rachna University',
    subtitle: 'Computer Science',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'Internship',
    subtitle: 'Intern at CODTECH IT SOLUTIONS PVT.LTD',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Internship',
    subtitle: 'Deloitte Technology Virtual Internship',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
];