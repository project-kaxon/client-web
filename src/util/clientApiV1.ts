import * as schema from '../../common/schema'
import * as util from '@/util/util'

// GROUP
export async function groupList() {
	const [success, data] = await util.extractResponse<
		schema.groupListResponseType,
		schema.groupListRequestType
	>('/api/v1/group/list', {})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

export async function groupCreate(name: string) {
	const [success, data] = await util.extractResponse<
		schema.groupCreateResponseType,
		schema.groupCreateRequestType
	>('/api/v1/group/create', {
		name,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

export async function groupDelete(name: string) {
	const [success, data] = await util.extractResponse<
		schema.groupDeleteResponseType,
		schema.groupDeleteRequestType
	>('/api/v1/group/delete', {
		name,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

export async function groupRename(oldName: string, newName: string) {
	const [success, data] = await util.extractResponse<
		schema.groupRenameResponseType,
		schema.groupRenameRequestType
	>('/api/v1/group/rename', {
		oldName,
		newName,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

/* ---------------------- document ---------------------- */

// create single
export async function documentCreateSingle(name: string) {
	const [success, data] = await util.extractResponse<
		schema.documentCreateSingleResponseType,
		schema.documentCreateSingleRequestType
	>('/api/v1/document/create?kind=KindSingle', {
		name,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// create couple
export async function documentCreateCouple(channel: string, id: string) {
	const [success, data] = await util.extractResponse<
		schema.documentCreateCoupledResponseType,
		schema.documentCreateCoupledRequestType
	>('/api/v1/document/create?kind=KindCoupled', {
		channel,
		id,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// read single
export async function readDocumentSingle(name: string) {
	const [success, data] = await util.extractResponse<
		schema.documentReadSingleResponseType,
		schema.documentReadSingleRequestType
	>('/api/v1/document/read?kind=KindSingle', {
		name,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// read couple
export async function readDocumentCouple(channel: string, id: string) {
	const [success, data] = await util.extractResponse<
		schema.documentReadCoupleResponseType,
		schema.documentReadCoupleRequestType
	>('/api/v1/document/read?kind=KindCoupled', {
		channel,
		id,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// write single
export async function writeDocumentSingle(name: string, content: string) {
	const [success, data] = await util.extractResponse<
		schema.documentWriteSingleResponseType,
		schema.documentWriteSingleRequestType
	>('/api/v1/document/write?kind=KindSingle', {
		name,
		content,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// write couple
export async function writeDocumentCouple(
	channel: string,
	id: string,
	content: string,
) {
	const [success, data] = await util.extractResponse<
		schema.documentWriteCoupleResponseType,
		schema.documentWriteCoupleRequestType
	>('/api/v1/document/write?kind=KindCoupled', {
		channel,
		id,
		content,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// delete single
export async function deleteDocumentSingle(name: string) {
	const [success, data] = await util.extractResponse<
		schema.documentDeleteSingleResponseType,
		schema.documentDeleteSingleRequestType
	>('/api/v1/document/delete?kind=KindSingle', {
		name,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// delete couple
export async function deleteDocumentCouple(channel: string, id: string) {
	const [success, data] = await util.extractResponse<
		schema.documentDeleteCoupleResponseType,
		schema.documentDeleteCoupleRequestType
	>('/api/v1/document/delete?kind=KindCoupled', {
		channel,
		id,
	})
	if (!success) {
		console.error(data)
		throw new Error('Request failed')
	}

	return data
}

// list single
export async function documentListSingle() {
	const [success, data] = await util.extractResponse<
		schema.documentListSingleResponseType,
		schema.documentListSingleRequestType
	>('/api/v1/document/list?kind=KindSingle')
	if (!success) {
		throw new Error(`Request failed: ${JSON.stringify(data)}`)
	}

	return data
}

// list couple
export async function documentListCouple(channel: string) {
	const [success, data] = await util.extractResponse<
		schema.documentListCoupleResponseType,
		schema.documentListCoupleRequestType
	>('/api/v1/document/list?kind=KindCoupled', {
		channel,
	})
	if (!success) {
		throw new Error(`Request failed: ${JSON.stringify(data)}`)
	}

	return data
}