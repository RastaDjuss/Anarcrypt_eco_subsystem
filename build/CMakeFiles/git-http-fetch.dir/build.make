# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.30

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/Cellar/cmake/3.30.2/bin/cmake

# The command to remove a file.
RM = /usr/local/Cellar/cmake/3.30.2/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/contrib/buildsystems

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/justinlanouette/AnarCrypt-EcO-SubSystem/build

# Include any dependencies generated for this target.
include CMakeFiles/git-http-fetch.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/git-http-fetch.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/git-http-fetch.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/git-http-fetch.dir/flags.make

CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o: CMakeFiles/git-http-fetch.dir/flags.make
CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o: /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c
CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o: CMakeFiles/git-http-fetch.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/justinlanouette/AnarCrypt-EcO-SubSystem/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o"
	/usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o -MF CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o.d -o CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o -c /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c

CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.i"
	/usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c > CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.i

CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.s"
	/usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c -o CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.s

CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o: CMakeFiles/git-http-fetch.dir/flags.make
CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o: /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c
CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o: CMakeFiles/git-http-fetch.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/justinlanouette/AnarCrypt-EcO-SubSystem/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o"
	/usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o -MF CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o.d -o CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o -c /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c

CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.i"
	/usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c > CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.i

CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.s"
	/usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c -o CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.s

# Object files for target git-http-fetch
git__http__fetch_OBJECTS = \
"CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o" \
"CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o"

# External object files for target git-http-fetch
git__http__fetch_EXTERNAL_OBJECTS = \
"/Users/justinlanouette/AnarCrypt-EcO-SubSystem/build/CMakeFiles/http_obj.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http.c.o" \
"/Users/justinlanouette/AnarCrypt-EcO-SubSystem/build/CMakeFiles/common-main.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/common-main.c.o"

git-http-fetch: CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-walker.c.o
git-http-fetch: CMakeFiles/git-http-fetch.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http-fetch.c.o
git-http-fetch: CMakeFiles/http_obj.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/http.c.o
git-http-fetch: CMakeFiles/common-main.dir/Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/common-main.c.o
git-http-fetch: CMakeFiles/git-http-fetch.dir/build.make
git-http-fetch: /Library/Developer/CommandLineTools/SDKs/MacOSX14.2.sdk/usr/lib/libcurl.tbd
git-http-fetch: liblibgit.a
git-http-fetch: libxdiff.a
git-http-fetch: libreftable.a
git-http-fetch: /Library/Developer/CommandLineTools/SDKs/MacOSX14.2.sdk/usr/lib/libz.tbd
git-http-fetch: /usr/local/lib/libintl.dylib
git-http-fetch: /Library/Developer/CommandLineTools/SDKs/MacOSX14.2.sdk/usr/lib/libiconv.tbd
git-http-fetch: CMakeFiles/git-http-fetch.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=/Users/justinlanouette/AnarCrypt-EcO-SubSystem/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking C executable git-http-fetch"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/git-http-fetch.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/git-http-fetch.dir/build: git-http-fetch
.PHONY : CMakeFiles/git-http-fetch.dir/build

CMakeFiles/git-http-fetch.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/git-http-fetch.dir/cmake_clean.cmake
.PHONY : CMakeFiles/git-http-fetch.dir/clean

CMakeFiles/git-http-fetch.dir/depend:
	cd /Users/justinlanouette/AnarCrypt-EcO-SubSystem/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/contrib/buildsystems /Users/justinlanouette/AnarCrypt-EcO-SubSystem/git/contrib/buildsystems /Users/justinlanouette/AnarCrypt-EcO-SubSystem/build /Users/justinlanouette/AnarCrypt-EcO-SubSystem/build /Users/justinlanouette/AnarCrypt-EcO-SubSystem/build/CMakeFiles/git-http-fetch.dir/DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/git-http-fetch.dir/depend

