import React from 'react'
import './TableData.less'
import dataSource from './data'
import Toast from './Toast'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const alertCopy = () => {
    Toast.success('Copy succeeded 🎉')
}

const ClientOption = () => {
    return (
        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td style={{width: '80px'}}>Short Param</td>
                    <td>Full Param(prefix"--")</td>
                    <td style={{width: '60px'}}>Effective</td>
                    <td>Value & Type</td>
                    <td>Description</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.option.map((item, i) => (
                        <tr key={i}>
                            <td>{item.opt}</td>
                            <td>{item.longOpt}</td>
                            <td>
                                {
                                    item.deprecated
                                        ?
                                        <span className="icon-times"></span>
                                        :
                                        <span className="icon-check"></span>
                                }
                            </td>
                            <td>{item.value}</td>
                            <td>{item.desc}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    );
};

const ClientProperty = () => {
    return (
        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Key</td>
                    <td>Description</td>
                    <td>Required</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.property.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                                <CopyToClipboard text={item.name} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                            <td>{item.desc}</td>
                            <td>
                                {
                                    item.required
                                        ?
                                        <span className="icon-toggle-on" title="Required"></span>
                                        :
                                        <span className="icon-toggle-off" title="Optional"></span>
                                }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};


const ClientMemory = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td style={{width: '380px'}}>Key</td>
                    <td>Description</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.memory.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                                <CopyToClipboard text={item.name} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                            <td>{item.desc}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};


const ClientTotalMem = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>TaskManager Config</td>
                    <td>JobManager Config</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.totalMem.map((item, i) => (
                        <tr key={i}>
                            <td>{item.group}</td>
                            <td>
                                <span className="label-info">{item.tm}</span>
                                <CopyToClipboard text={item.tm} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                            <td>
                                <span className="label-info">{item.jm}</span>
                                <CopyToClipboard text={item.jm} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};


const ClientCheckpoints = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Description</td>
                    <td>Value | Type</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.checkpoints.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

const ClientBackend = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Description</td>
                    <td>Value | Type</td>
                    <td>Effective rules</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.backend.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                                <CopyToClipboard text={item.name} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                            <td>{item.desc}</td>
                            <td>{item.value}</td>
                            <td>{item.mode}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};


const ClientFixedDelay = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Description</td>
                    <td>Value | Unit</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.fixedDelay.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                                <CopyToClipboard text={item.name} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                            <td>{item.desc}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};


const ClientFailureRate = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Description</td>
                    <td>Value | Unit</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.failureRate.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                                <CopyToClipboard text={item.name} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                            <td>{item.desc}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};


const ClientTables = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Description</td>
                    <td>Value</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.tables.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                                <CopyToClipboard text={item.name} onCopy={() => alertCopy()}>
                                    <i className="icon-copy"></i>
                                </CopyToClipboard>
                            </td>
                            <td>{item.desc}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};



const DeploymentEnvs = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Version</td>
                    <td>Required</td>
                    <td>Other</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.deploymentEnvs.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                            </td>
                            <td>{item.version}</td>
                            <td>
                                {
                                    item.required
                                        ?
                                        <span className="icon-toggle-on" title="Required"></span>
                                        :
                                        <span className="icon-toggle-off" title="Optional"></span>
                                }
                            </td>
                            <td>{item.other}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    );
};

const DevelopmentEnvs = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Version</td>
                    <td>Required</td>
                    <td>Other</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.developmentEnvs.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                            </td>
                            <td>{item.version}</td>
                            <td>
                                {
                                    item.required
                                        ?
                                        <span className="icon-toggle-on" title="Required"></span>
                                        :
                                        <span className="icon-toggle-off" title="Optional"></span>
                                }
                            </td>
                            <td>{item.other}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    );
};

const QuickStartEnvs = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Material</td>
                    <td>Version Requirement</td>
                    <td>Demo Version (For Reference Only)</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.QuickStartEnvs.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                            </td>
                            <td>{item.version}</td>
                            <td>{item.other}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    );
};

const InstallationEnvs = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Version</td>
                    <td>Required</td>
                    <td>Other</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.installationEnvs.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                            </td>
                            <td>{item.version}</td>
                            <td>
                                {
                                    item.required
                                        ?
                                        <span className="icon-toggle-on" title="必须"></span>
                                        :
                                        <span className="icon-toggle-off" title="可选"></span>
                                }
                            </td>
                            <td>{item.other}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    );
};

const DockerInstallationEnvs = () => {
    return (

        <div>
            <table className="table-data" style={{width: '100%', display: 'inline-table'}}>
                <thead>
                <tr>
                    <td>Item</td>
                    <td>Version</td>
                    <td>Required</td>
                    <td>Other</td>
                </tr>
                </thead>
                <tbody>
                {
                    dataSource.dockerInstallationEnvs.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <span className="label-info">{item.name}</span>
                            </td>
                            <td>{item.version}</td>
                            <td>
                                {
                                    item.required
                                        ?
                                        <span className="icon-toggle-on" title="必须"></span>
                                        :
                                        <span className="icon-toggle-off" title="可选"></span>
                                }
                            </td>
                            <td>{item.other}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    );
};

export {
    ClientOption,
    ClientProperty,
    ClientMemory,
    ClientTotalMem,
    ClientCheckpoints,
    ClientBackend,
    ClientFixedDelay,
    ClientFailureRate,
    ClientTables,
    DevelopmentEnvs,
    DeploymentEnvs,
    QuickStartEnvs,
    InstallationEnvs,
    DockerInstallationEnvs
};
