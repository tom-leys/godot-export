import * as core from '@actions/core';
import path from 'path';
import * as os from 'os';

const ARCHIVE_EXPORT_OUTPUT = core.getInput('archive_export_output') === 'true';
const ARCHIVE_SINGLE_RELEASE_OUTPUT = core.getInput('archive_single_release_output') === 'true';
const BASE_VERSION = core.getInput('base_version');
const GENERATE_RELEASE_NOTES = core.getInput('generate_release_notes') === 'true';
const GODOT_DOWNLOAD_URL = core.getInput('godot_executable_download_url');
const GODOT_TEMPLATES_DOWNLOAD_URL = core.getInput('godot_export_templates_download_url');
const RELATIVE_EXPORT_PATH = core.getInput('relative_export_path');
const RELATIVE_PROJECT_PATH = core.getInput('relative_project_path');
const SHOULD_CREATE_RELEASE = core.getInput('create_release') === 'true';
const UPDATE_WINDOWS_ICONS = core.getInput('update_windows_icons') === 'true';

const GODOT_WORKING_PATH = path.resolve(path.join(os.homedir(), '/.local/share/godot'));

export {
  ARCHIVE_EXPORT_OUTPUT,
  ARCHIVE_SINGLE_RELEASE_OUTPUT,
  BASE_VERSION,
  GENERATE_RELEASE_NOTES,
  GODOT_DOWNLOAD_URL,
  GODOT_TEMPLATES_DOWNLOAD_URL,
  GODOT_WORKING_PATH,
  RELATIVE_EXPORT_PATH,
  RELATIVE_PROJECT_PATH,
  SHOULD_CREATE_RELEASE,
  UPDATE_WINDOWS_ICONS,
};
