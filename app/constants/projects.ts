import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: 'Cybersecurity Defense Framework',
    date: 'Apr 2025',
    subtext: 'ML-based intrusion detection on NSL-KDD dataset. Simulated adversarial attacks (FGSM, PGD) and built a trust gate mechanism to dynamically adjust model decisions.',
    url: 'https://github.com/kunal9812/cybersecurity_framework-DTI',
  },
  {
    title: 'Healthcare Management System',
    date: 'Mar 2025',
    subtext: 'Relational DB system with a 9-table schema, full 3NF normalization, and Role-Based Access Control (RBAC) using PostgreSQL with 4 distinct roles.',
  },
  {
    title: 'HabitPal',
    date: 'Mar 2026',
    subtext: 'Full-stack Android habit tracker (Kotlin, MVVM, Room DB) with streak tracking, progress charts, and offline-first data storage.',
    url: 'https://github.com/kunal9812/HabitPal-App',
  },
  {
    title: 'Custom Command-Line Shell',
    date: 'Apr 2026',
    subtext: 'A custom Unix shell built in C++ supporting piping, I/O redirection, background processes, and built-in commands. Containerized with Docker.',
  },
  {
    title: 'p4lang/behavioral-model',
    date: 'Mar 2026',
    subtext: 'GSoC 2026 qualification contribution. Added Bazel 8.5.0 build support for simple_switch_grpc in the official P4 language reference implementation (633+ stars).',
    url: 'https://github.com/p4lang/behavioral-model/pull/1354',
  },
];
