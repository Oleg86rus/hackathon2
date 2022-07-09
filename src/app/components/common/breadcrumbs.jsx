import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink, useHistory, withRouter } from "react-router-dom";

const Breadcrumbs = () => {
    const { location } = useHistory();
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((el) => el);

    const renderRoute = [
        { name: "/blog", label: "Блог" },
        { name: "/about", label: "О компании" }
    ];

    const getPathnameHome = () => {
        if (pathnames.length === 0) {
            return null;
        } else {
            return (
                <>
                    <NavLink to="/" className="card-title me-1">
                        <i className="bi bi-house-fill"></i>
                    </NavLink>
                </>
            );
        };
    };

    return (
        <>
            <Breadcrumb>
                {getPathnameHome()}
                {pathnames.map((pathname, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const result = renderRoute.filter(render => render.name === routeTo);

                    return result.map((element, index) => {
                        return (
                            <div key={index}>
                                {
                                    isLast
                                        ? <span className="text-secondary">/ {element.label}</span>
                                        : <NavLink to={routeTo} className="card-title">
                                            / {element.label}
                                        </NavLink>
                                }
                            </div>
                        );
                    });
                })}
            </Breadcrumb>
        </>
    );
};

export default withRouter(Breadcrumbs);
