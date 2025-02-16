-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(80) UNIQUE NOT NULL,
    password VARCHAR(120) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

-- Create messages table
CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    email_field VARCHAR(120) NOT NULL,
    message_content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table
CREATE TABLE skills (
    skill_id SERIAL PRIMARY KEY,
    skill_name VARCHAR(120) NOT NULL,
    skill_category VARCHAR(120) NOT NULL,
    skill_description TEXT NOT NULL
);

-- Create projects table
CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_title VARCHAR(120) NOT NULL,
    project_img BYTEA NOT NULL,
    project_description TEXT NOT NULL
);

-- Insert Admin User
-- Use ON CONFLICT to avoid duplicate insertion if the user already exists
INSERT INTO users (username, password, is_admin)
VALUES ('admin', 'justdancewithmetwice', TRUE)
ON CONFLICT (username) DO NOTHING;