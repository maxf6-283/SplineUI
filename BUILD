py_library(
    name = "swerve_trajectory_optimizer",
    srcs = ["swerve_trajectory_optimizer.py"],
    deps = [
        "//frc971/control_loops/python:controls",
        "//frc971/control_loops/swerve:dynamics",
        "@pip//casadi",
        "@pip//scipy",
    ],
)

py_test(
    name = "swerve_trajectory_optimizer_test",
    srcs = ["swerve_trajectory_optimizer_test.py"],
    deps = [
        ":python_init",
        ":swerve_trajectory_optimizer",
    ],
)

py_binary(
    name = "server",
    srcs = [
        "server.py",
    ],
    data = [
        "www:static_files",
    ],
    target_compatible_with = ["@platforms//os:linux"],
    visibility = ["//visibility:public"],
    deps = [
        ":trajectory_solver",
        "@pip//flask",
    ],
)

py_library(
    name = "trajectory_solver",
    srcs = [
        "trajectory_solver.py",
    ],
    deps = [
        ":swerve_trajectory_optimizer",
        "@pip//casadi",
    ],
)

py_test(
    name = "trajectory_solver_test",
    srcs = [
        "trajectory_solver_test.py",
    ],
    deps = [
        ":trajectory_solver",
    ],
)

py_binary(
    name = "generate_solved_trajectory",
    srcs = [
        "generate_solved_trajectory.py",
    ],
    data = [
        ":testing_swerve_path",
    ],
    target_compatible_with = ["@platforms//os:linux"],
    visibility = ["//visibility:public"],
    deps = [
        ":trajectory_solver",
        "@pip//glog",
        "@pip//python_gflags",
    ],
)

filegroup(
    name = "testing_swerve_path",
    srcs = [
        "testing_swerve_path.json",
    ],
)
