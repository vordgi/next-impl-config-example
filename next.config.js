const withNextConfig = require('next-impl-config/with-next-config').default;

/** @type {import('next').NextConfig} */
const nextConfig = {
    //
};

module.exports = withNextConfig(['development', 'staging', 'production'])(nextConfig);
