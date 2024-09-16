/** @type {import('next').NextConfig} */
import pwa from 'next-pwa';

const config = {};

export default pwa({
    dest: 'public',
    register: true,
    skipWaiting: true,
})(config);